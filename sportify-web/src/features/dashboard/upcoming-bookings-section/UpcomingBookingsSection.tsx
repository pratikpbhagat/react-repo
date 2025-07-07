import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import SubHeader from "../../../components/core/page-sub-header/SubHeader.tsx";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";


const bookings = [
    {title: "Turf A", description: "Mon, 6 PM", action: "View", content: "5v5 Football", footer: "Paid"},
    {title: "Court B", description: "Tue, 4 PM", action: "Details", content: "Badminton Doubles", footer: "Unpaid"},
    {title: "Stadium X", description: "Wed, 7 AM", action: "Open", content: "Cricket Nets", footer: "Confirmed"},
];

const BookingCard = ({booking}: { booking: typeof bookings[number] }) => (
    <Card className="w-[260px] h-[260px]">
        <CardHeader>
            <CardTitle>{booking.title}</CardTitle>
            <CardDescription>{booking.description}</CardDescription>
            <CardAction>{booking.action}</CardAction>
        </CardHeader>
        <CardContent>
            <p>{booking.content}</p>
        </CardContent>
        <CardFooter>
            <p>{booking.footer}</p>
        </CardFooter>
    </Card>
);

const UpcomingBookingsSection = () => {
    return (
        <section className="upcoming-bookings-section">
            <SubHeader title="Upcoming Bookings"/>
            <Dialog>
                <DialogTrigger>
                    <Carousel>
                        <CarouselContent className="-ml-4">
                            {bookings.map((booking, index) => (
                                <CarouselItem key={index} className="pl-4">
                                    <BookingCard booking={booking}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default UpcomingBookingsSection;
