"use client"
import { Habit } from "@/app/types"
import Link from "next/link"
import CircularProgressBar from "./CircularProgressBar"

type Prop = {
    habit: Habit,
    showStats: boolean
}

export default function HabitCard({ habit, showStats = true }: Prop) {

    return (
        <Link
            href={`/habits/${habit.id}`}
            className="p-4 flex flex-col gap-2 bg-gray-2 rounded-2xl border-2 border-primary-100">
            <div className="flex gap-4 items-start">
                <div className="w-full">
                    <p className="font-bold">{habit.title}</p>
                    <p className="text-sm line-clamp-2 text-gray-75">{habit.description}</p>
                </div>
                <CircularProgressBar />
            </div>
            {
                showStats && (
                    <HabitCardStats stats={habit.stats} isHabitCompleted={habit.isCompleted} />
                )
            }
        </Link >
    )
}

type HabitCardStatsProps = {
    stats: Habit["stats"],
    isHabitCompleted: boolean
}


function HabitCardStats({
    stats: {
        numberOfHabitDays,
        numberOfFulfilledHabitDays,
        numberOfMissedDays,
        numberOfRemainingDays
    },
    isHabitCompleted
}: HabitCardStatsProps) {
    return (
        <div className="flex flex-wrap w-full text-xs gap-x-4 gap-y-1">
            <p className="flex items-center gap-1">
                <span className="text-gray-75">Duration: </span>
                <strong className="">{numberOfHabitDays} Days</strong>
            </p>
            <p className="flex items-center gap-1">
                <span className="text-gray-75">Fulfilled: </span>
                <strong className="text-primary-500">{numberOfFulfilledHabitDays} Days</strong>
            </p>
            <p className="flex items-center gap-1">
                <span className="text-gray-75">Missed: </span>
                <strong className="text-red">{numberOfMissedDays} Days</strong>
            </p>
            {
                isHabitCompleted === false && (
                    <p className="flex items-center gap-1 text-gray-75">
                        <span>Remaining: </span>
                        <strong>{numberOfRemainingDays} Days</strong>
                    </p>
                )
            }
        </div>
    )
}
