import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('PeopleDetailComponent => *', [
            // tslint:disable-next-line: max-line-length
            query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 30px)', top: '80px', left: '0', right: '0' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('PeopleComponent => *', [
            // tslint:disable-next-line: max-line-length
            query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 30px)', top: '80px', left: '0', right: '0' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('PeopleComponent => PeopleDetailComponent', [
            // tslint:disable-next-line: max-line-length
            query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 30px)', top: '80px', left: '0', right: '0' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('PeopleDetailComponent => PeopleComponent', [
            // tslint:disable-next-line: max-line-length
            query(':enter, :leave', style({ position: 'fixed', width: 'calc(100% - 30px)', top: '80px', left: '0', right: '0' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.25s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);