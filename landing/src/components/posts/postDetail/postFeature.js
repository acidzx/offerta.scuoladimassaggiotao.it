import React from "react";

import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const PostFeature = (props) => {
  const { features1, features2, features3 } = props;
  const supportLinks = [
    {
      name: features1,
      href: "#",
      icon: BuildingLibraryIcon,
      bgcolor: "bg-green-700",
      color: "text-white",
      ref: "features1",
    },
    {
      name: features2,
      href: "#",
      icon: HandRaisedIcon,
      bgcolor: "bg-white",
      color: "text-gray-700",
      ref: "features2",
    },
    {
      name: features3,
      href: "#",
      icon: UserGroupIcon,
      bgcolor: "bg-red-700",
      color: "text-white",
      ref: "features3",
    },
  ];

  return (
    <div
      className="hidden lg:block z-10 mx-auto lg:mt-[30px] max-w-7xl px-6 pb-5 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 className="sr-only" id="contact-heading">
        Features
      </h2>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        {supportLinks.map((link) => (
          <div
            key={link.ref}
            className="flex flex-col rounded-2xl bg-white shadow-xl"
          >
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              <div
                className={`absolute top-0 inline-block -translate-y-1/2 transform rounded-xl ${link.bgcolor} p-5 shadow-lg`}
              >
                <link.icon
                  className={`h-9 w-9 ${link.color}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
              {/*   <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeature;
