import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";
  


  
  // Remove the duplicate colleague1 and use just one declaration
  const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: ColleagueV2= {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  
  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: ColleagueV2
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    };
    // Removed unnecessary type assertion
  }
  
  // Assuming friends array exists in imported file
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
  );
  
  const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
  
  );
  
 
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone;
        } else {
          return buddy.contact.email;
        }
      }
    }
    return undefined; 
  }
  
  console.log(myFootballBuddies);
  console.log(myBandBuddies);
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

  function getBuddyListFriends(list: BuddyList): Friend[] {
    return list.members.reduce<Friend[]>((friends, buddy) => {
      if ("phone" in buddy) {  // Type guard to check if buddy is a Friend
        friends.push(buddy);
      }
      return friends;
    }, []);
  }
  // Test the function
console.log(getBuddyListFriends(myFootballBuddies));
console.log(getBuddyListFriends(myBandBuddies));