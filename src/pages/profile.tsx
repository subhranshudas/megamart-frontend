import { useState } from "react";
import useStore from "@/use-store"; // Assuming you have a store to get user data
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// Define constants for sidebar options
const SIDEBAR_OPTIONS = {
  ACCOUNT: "account",
  ORDERS: "orders",
} as const;

type SidebarOption = (typeof SIDEBAR_OPTIONS)[keyof typeof SIDEBAR_OPTIONS];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<SidebarOption>(
    SIDEBAR_OPTIONS.ACCOUNT
  );
  const { user } = useStore((state) => state); // Get user data from store

  const renderContent = () => {
    switch (activeTab) {
      case SIDEBAR_OPTIONS.ACCOUNT:
        return (
          <div>
            <h2 className="text-lg font-semibold">Account Information</h2>
            <p>Username: {user?.username}</p>
            <p>Email: {user?.email}</p>
            <p>
              Created On:{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleString()
                : "N/A"}
            </p>
          </div>
        );
      case SIDEBAR_OPTIONS.ORDERS:
        return (
          <div>
            <h2 className="text-lg font-semibold">Your Orders</h2>
            <ul>
              {user?.orders.map((order) => (
                <li key={order.id}>Order ID: {order.id}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarContent className="w-[200px] p-4">
            <h2 className="mb-4 text-lg font-semibold">Profile Menu</h2>
            <Button
              variant={
                activeTab === SIDEBAR_OPTIONS.ACCOUNT ? "default" : "ghost"
              }
              className="w-full justify-start"
              onClick={() => setActiveTab(SIDEBAR_OPTIONS.ACCOUNT)}
            >
              Account
            </Button>
            <Button
              variant={
                activeTab === SIDEBAR_OPTIONS.ORDERS ? "default" : "ghost"
              }
              className="w-full justify-start"
              onClick={() => setActiveTab(SIDEBAR_OPTIONS.ORDERS)}
            >
              Orders
            </Button>
          </SidebarContent>
        </Sidebar>
        <div className="flex-1 p-4">
          <SidebarTrigger />
          {renderContent()}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ProfilePage;
