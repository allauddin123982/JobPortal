import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  const [userName, setUserName] = useState('')
  
  //if user is not logged-in, route them to home page with search param sign-in true
  useEffect(() => {
    if (search.get("sign-in")) setShowSignIn(true);
  }, [search]);

  const hadnleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };


  const getFirstName = async () => {
    const n = await user.externalAccounts[0].firstName;
    setUserName(n)
  };
  getFirstName();



  return (
    <>
      <nav className="py-4 flex justify-between items-center">
       {/* Logo */}
        <Link>
          <img src="/logo.png" alt="" className="h-10" />
        </Link>
        <h4 className="text-2xl">{userName}</h4>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {/* add a condition here */}
            <Button variant="destructive" className="rounded-full flex gap-1">
              <PenBox size={20} className="mr-2" />
              Post a Job
              {/* <Link to={"/post-job"}>asd</Link> */}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    labelIcon={<BriefcaseBusiness size={15} />}
                    href="/my-jobs"
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Button>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={hadnleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding " //when user signe in
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
