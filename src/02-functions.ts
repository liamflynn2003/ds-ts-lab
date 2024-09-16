import {Friend, Colleague, EmailContact } from './myTypes'
import {friends, colleagues} from './01-basics'

function older(f: Friend) : string {
    f.age += 1;
    return `${f.name} is now ${f.age}` ;
}
function allOlder(f: Friend) : string[] {
    const result = [];
    for(let i = 0;i<friends.length;i++){
        const friend = friends[i];
        friend.age += 1;
        result.push(`${friend.name} is now ${friend.age}`)
    }
    return result
}

console.log(allOlder(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const highest = highestExtension(cs);
    const newExtension = highest.contact.extension + 1;

    const newColleague: Colleague = {
        name,
        department,
        contact: {
            extension: newExtension,
            email
        }
    };
    cs.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined){
    const end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));
  
  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): string[] {
    // Filter friends based on the callback function and map to names
    return friends.filter(criterion).map(friend => friend.name);
}
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));