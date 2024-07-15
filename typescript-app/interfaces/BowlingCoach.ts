import {Coach} from './Coach';

export class BowlingCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your spin bowling technique";
    }

}