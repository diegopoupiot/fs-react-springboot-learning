import {Coach} from './Coach';

export class FootballCoach implements Coach {

    getDailyWorkout(): string {
        return "Practice your free kicks for 30 minutes";
    }

}