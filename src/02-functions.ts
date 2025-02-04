import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friendsList: Friend[]): string[] {
    return friendsList.map(friend => {
        friend.age += 1
        return `${friend.name} is now ${friend.age}`
    })
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  

  
  function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string
  ) {
    const highestExt = cs.length > 0 
      ? Math.max(...cs.map(c => c.contact.extension)) 
      : 1000; 
    
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: highestExt + 1
      }
    };
  
    cs.push(newColleague);
  }
  

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter(c => c.name === "Sheild O Connell"));
  

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  
  function findFriends(friendsList: Friend[], criterion: (friend: Friend) => boolean): Friend[] {
    return friendsList.filter(criterion);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
