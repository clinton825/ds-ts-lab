import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

function sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
    const sortedArray = [...data];
    return sortedArray.sort(compareFn);
}

console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
console.log(sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
));