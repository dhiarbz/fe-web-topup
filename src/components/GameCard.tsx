import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface GameCardProps {
    title: string;
    image: string;
    category?: string;
    discount?: string;
}

const GameCard = ({ title, image, category, discount }: GameCardProps) => {
    return (
        <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer card-hover">
            <div className="relative aspect-square overflow-hidden">
                <Image src={image} alt={title} className ="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                {discount && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground"></Badge>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{title}</h3>
                {category && (
                    <p className="text-sm text-muted-foreground">{category}</p>
                )}
            </div>
        </Card>
    )
}

export default GameCard;