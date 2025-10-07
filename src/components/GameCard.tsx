"use client";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type ImageSource = string | StaticImageData;

interface GameCardProps {
    title: string;
    image: ImageSource;
    category?: string;
    discount?: string;
    href?: string;
}

const GameCard = ({ title, image, category, discount, href = "#" }: GameCardProps) => {
    const cardContent = (
        <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    placeholder="blur"
                />
                {discount && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground font-semibold">
                        {discount}
                    </Badge>
                )}
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                {category && (
                    <p className="text-sm text-muted-foreground">{category}</p>
                )}
            </div>
        </Card>
    );

    // Jika ada href, wrap dengan Link, jika tidak gunakan div
    if (href !== "#") {
        return (
            <Link href={href} className="block">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}

export default GameCard;