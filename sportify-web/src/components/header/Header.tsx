import "./Header.scss";
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {ProfileForm} from "@/features/user-profile/ProfileForm.tsx";

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-info">
                <div className="count">3</div>
                <div className="label">
                    New items since
                    <br/>
                    last log in
                </div>
            </div>
            <div className="divider"/>
            <div className="center-info">
                <div>Last log in:</div>
                <div className="login-time">8 May 2025 07:46 AM</div>
            </div>
            <div className="divider"/>
            <div className="right-info">
                <Popover>
                    <PopoverTrigger>
                            <span className="icon">
            <img src="/assets/icons/chat_bubble_outline.svg" alt="Messages"/>
          </span>
                    </PopoverTrigger>
                    <PopoverContent>Place content for the popover here.</PopoverContent>
                </Popover>
                <span className="icon">
            <img src="/assets/icons/bell-icon.svg" alt="Notifications"/>
          </span>
                <span className="icon">
            <Sheet>
              <SheetTrigger>
                <img src="/assets/icons/settings.svg" alt="Settings"/>
              </SheetTrigger>
              <SheetContent className="!top-[70px] !w-[calc(100%-70px)]">
                <SheetHeader>
                  <SheetTitle>User Profile</SheetTitle>
                  <SheetDescription>
                    <ProfileForm/>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </span>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
