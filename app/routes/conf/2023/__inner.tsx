import { Outlet } from "@remix-run/react";

export default function InnerLayout() {
  return (
    <div className="my-8 md:my-12 xl:my-14">
      <div className="mx-auto px-6 md:px-8 lg:px-10 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
}
