import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet.tsx";
import {Tooltip, TooltipContent, TooltipTrigger,} from "@/components/ui/tooltip.tsx";
import {Label} from "@/components/ui/label.tsx";

const items = [
    {
        icon: "/assets/icons/sports/book_slot.png",
        alt: "Book a Slot",
        label: "Book a Slot",
    },
    {
        icon: "/assets/icons/sports/join_game.png",
        alt: "Create/Join Games",
        label: "Create/Join Games",
    },
    {
        icon: "/assets/icons/sports/organize_tournament.png",
        alt: "Tournaments",
        label: "Tournaments",
    },
    {
        icon: "/assets/icons/sports/organize_trainings.png",
        alt: "Trainings/Coaching",
        label: "Trainings/Coaching",
    },
    {
        icon: "/assets/icons/sports/communities.png",
        alt: "Communities",
        label: "Communities",
    },
    {
        icon: "/assets/icons/sports/communities.png",
        alt: "Find Players",
        label: "Find Players",
    },
];

const SportsDrawer = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 mt-6">
            {items.map((item, idx) => (
                <Sheet key={idx}>
                    <SheetTrigger asChild>
                        <div className="flex flex-col items-center">
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        src={item.icon}
                                        alt={item.alt}
                                        className="w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                            <Label className="mt-2 text-center text-sm md:text-base font-medium">
                                {item.label}
                            </Label>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="!top-[70px] !w-[calc(100%-70px)]">
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    );
};

export default SportsDrawer;
