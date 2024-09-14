import {Friend, Colleague } from './myTypes'
import {friends, colleagues} from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}
function allOlder(f: Friend) : string[] {
    const result: string[] =[]
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