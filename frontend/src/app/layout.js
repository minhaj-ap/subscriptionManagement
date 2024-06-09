export const metadata = {
  title: "Subscription Management System",
  description:
    "A web application for managing subscriptions to various services or products, handling billing, and providing users with a seamless subscription experience.",
  keywords: [
    "subscription",
    "management",
    "system",
    "billing",
    "payments",
    "subscriptions",
    "users",
    "services",
    "products",
    "web application",
    "backend development",
  ],
  author: "Minhaj AP",
  robots: "index, follow",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
