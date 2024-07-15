import {Coach} from "./Coach";
import {FootballCoach} from "./FootballCoach";
import {BowlingCoach} from "./BowlingCoach";

let coaches: Coach[] = [];

coaches.push(new FootballCoach());
coaches.push(new BowlingCoach());

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}