"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nominalList = [
    {id: 'n1', label: "86 Diamonds", price: "Rp 20.000" },
    {id: 'n2', label: "172 Diamonds", price: "Rp 38.000" },
    {id: 'n3', label: "257 Diamonds", price: "Rp 56.000" },
    {id: 'n4', label: "344 Diamonds", price: "Rp 74.000" },
]

export function TopupForm () {
    const [game, setGame] = useState<string>("mlbb");
    const [UserID, setUserID] = useState<string>("");
    const [server, setServer] = useState<string>("");
    const [selected, setSelected] = useState<string | null>(null);
    const [processing, setProcessing] = useState<boolean>(false);

    function handlePay(){
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            alert("Pembayaran berhasil!");
        }, 1000);
    }

    return (
        <Card className="border-border">
            <CardHeader>
                <CardTitle className="text-base">Form Top Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="grid gap-3">
                    <Label htmlFor="game">Pilih Game</Label>
                    <Select value = {game} onValueChange={setGame}>
                        <SelectTrigger id="game" aria-label="Pilih Game">
                            <SelectValue placeholder="Pilih Game" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mlbb">Mobile Legends</SelectItem>
                            <SelectItem value="freefire">Free Fire</SelectItem>
                            <SelectItem value="pubg">PUBG Mobile</SelectItem>
                            <SelectItem value="valorant">Valorant</SelectItem>
                            <SelectItem value="genshin">Genshin Impact</SelectItem>
                            <SelectItem value="codm">Call of Duty Mobile</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="grid gap-2">
                        <Label htmlFor="userID">User ID</Label>
                        <Input id="userid" placeholder="Contoh: 0822" value={UserID} onChange={(e) => setUserID(e.target.value)} aria-label="User ID" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="server">Server/UID</Label>
                        <Input id="server" placeholder="Contoh: 1234" value={server} onChange={(e) => setServer(e.target.value)} aria-label="Server" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="nominal">Pilih Nominal</Label>
                    <div className="grid gap-2 sm:grid-cols-2">
                        {nominalList.map((n) => {
                            const active = selected === n.id;
                            return (
                                <Button key={n.id} onClick={() => setSelected(n.id)} className={cn("rounded-md border-border p-3 text-left transition", active ? "bg-secondary txt-[color:var(--background)]":"bg-secondary-foreground hover:bg-secondary-foreground/70",)} aria-pressed={active} aria-label={`pilih nominal ${n.label}`}
                                >
                                    <div className="text-sm font-medium">{n.label}</div>
                                    <div className={cn("text-xs mt-1", active ? "opacity-90" : "text-muted-foreground")}>{n.price}</div>
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label>Metode Pembayaran</Label>
                    <div className="grid grid-cols-3 gap-2">
                        {["Dana", "Gopay", "OVO"].map((m) => (
                            <div key={m} className="rounded-md border-border px-3 py-2 text-center text-xs bg-secondary-foreground" aria-label={`Metode Pembayaran ${m}`}>
                                {m}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col item-stretch gap-2">
                <Button disabled= {!selected || !UserID || !server || processing}
                onClick={handlePay} className="h-10 bg-[color:var(--chart-2)] text-[color:var(--background)] hover:opacity-90 focus-visible:ring-[color:var(--chart-2)]">
                    {processing ? "Memproses..." : "Bayar Sekarang"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">Pastikan User ID dan Server sudah benar sebelum melakukan pembayaran.</p>
            </CardFooter>
        </Card>
    )
}
export default TopupForm;