import "./CustomComponent.scss"
import {Label} from "@radix-ui/react-label";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";

const CustomComponent = () => {
    return (
        <div className="welcome-header">
            <div className="top-row">
                <div className="greeting">
                    <h2>Hello, Firstname!</h2>
                    <h3 className="highlight">This is a Custom Component</h3>
                </div>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email"/>
            </div>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="r1"/>
                    <Label htmlFor="r1">Default</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2"/>
                    <Label htmlFor="r2">Comfortable</Label>
                </div>
                <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3"/>
                    <Label htmlFor="r3">Compact</Label>
                </div>
            </RadioGroup>
            <div className="bg-primary text-primary-foreground">Hello</div>
            <div className="bg-brand text-black p-4 rounded-lg shadow-lg">
                Hello, Sportify!
            </div>
            <p>No upcoming bookings at the moment.</p>
            <div className="flex min-h-svh flex-col items-center justify-center">
                <Button>Click me</Button>
            </div>
            <div>
                <Button variant="destructive">Click me</Button>
                <Input type="file"/>
            </div>
            <Carousel>
                <CarouselPrevious className="absolute left-0 z-10">
                    <Button variant="outline">Previous</Button></CarouselPrevious>
                <CarouselContent className="-ml-4">
                    <CarouselItem className="pl-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title 1</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                                <CardAction>Card Action</CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="pl-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title 2</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                                <CardAction>Card Action</CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="pl-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title 3</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                                <CardAction>Card Action</CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext className="absolute right-0 z-10">
                    <Button variant="outline">Next</Button></CarouselNext>
            </Carousel>
        </div>
    );
}

export default CustomComponent;