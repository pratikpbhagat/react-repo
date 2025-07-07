import SubHeader from "@/components/core/page-sub-header/SubHeader.tsx";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTrigger} from "@/components/ui/drawer.tsx";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import SportsDrawer from "@/features/dashboard/sports-drawer/SportsDrawer.tsx";

const BookYourSlot = () => {
    return (
        <>
            <div>
                <SubHeader title="Choose your Sport"/>
            </div>
            <Drawer>
                <DrawerTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <img src="/assets/icons/sports/pickelball.png" alt="Pickelball"
                                 className="w-24 h-24"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Pickelball</p>
                        </TooltipContent>
                    </Tooltip>
                </DrawerTrigger>
                <DrawerTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <img src="/assets/icons/sports/badminton.png" alt="Badminton"
                                 className="w-24 h-24"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Badminton</p>
                        </TooltipContent>
                    </Tooltip>
                </DrawerTrigger>
                <DrawerTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <img src="/assets/icons/sports/squash.png" alt="Squash"
                                 className="w-24 h-24"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Squash</p>
                        </TooltipContent>
                    </Tooltip>
                </DrawerTrigger>
                <DrawerTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <img src="/assets/icons/sports/tennis.png" alt="Tennis"
                                 className="w-24 h-24"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Tennis</p>
                        </TooltipContent>
                    </Tooltip>
                </DrawerTrigger>
                <DrawerTrigger>
                    <Tooltip>
                        <TooltipTrigger>
                            <img src="/assets/icons/sports/swimming.png" alt="Swimming"
                                 className="w-24 h-24"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Swimming</p>
                        </TooltipContent>
                    </Tooltip>
                </DrawerTrigger>
                <DrawerContent className="!left-[240px] !w-[calc(100%-240px)]">
                    <DrawerHeader>
                        <DrawerDescription>
                            <SportsDrawer/>
                        </DrawerDescription>
                    </DrawerHeader>
                    {/*<DrawerFooter className="flex gap-2">*/}
                    {/*    <Button>*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*    <DrawerClose>*/}
                    {/*        <Button variant="outline" className="w-fit px-4" size="sm">*/}
                    {/*            Cancel*/}
                    {/*        </Button>*/}
                    {/*    </DrawerClose>*/}
                    {/*</DrawerFooter>*/}
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default BookYourSlot;