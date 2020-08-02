import React from 'react'
import ReactMarkdown from 'react-markdown';


const markdown = `
## First Amendment
Freedom of speech, religion, the press, and assembly (the right to get together and talk politics and political action).

Actual text: Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press, or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.

**Something to remember**: The First Amendment protects you from laws that restrict your freedom of speech, but not from private company’s rules. Companies and private universities often make rules about what you can’t say. The First Amendment has nothing to do with these.

**Something else to remember**: There are limits to freedom of speech, too. Lying under oath in court is a crime, for example. So is saying something that leads directly to violence (like advocating a crime). 

## Second Amendment
You can own guns, since it’s important for countries to have militias to defend themselves. 

**Something to remember**: When the Bill of Rights was first drafted, there wasn’t actually an official U.S. army! (Though by the end of Congress’s first session, a law had been passed establishing one.) So this Amendment had to do with national defense. 

Actual text: A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.

## Third Amendment
Nobody can force you to let soldiers use your house as a base of operations. (During the Revolutionary War, the British “quartered” soldiers in American houses. People weren’t pumped.)

Actual text: No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner; nor in time of war, but in a manner to be prescribed by law.

## Fourth Amendment
You need a warrant to search somebody’s home, car, etc. To get a warrant, you need “probable cause.” (Probable cause means that it seems reasonable to believe somebody committed a crime -- but you can imagine that different judges might interpret this differently.)

Actual text: The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.

## Fifth Amendment
If you’re accused of a crime, you don’t have to take the witness stand so that the opposing lawyer can examine you. Exception ##1: If you’re ever summoned to speak in front of a grand jury, you’d have to answer questions. Exception ##2: If you’re in the armed forces and the country’s at war. 

The Fifth also says the government can’t take your stuff, put you in jail, or kill you without convicting you of a crime or (if it applies) compensating you.

Actual text: No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself; nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use without just compensation

## Sixth Amendment 

You have the right to a (relatively) quick trial, a lawyer, and an unbiased jury. You also get to to know who’s accusing you of a crime. 

Actual text: In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed; which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor; and to have the assistance of counsel for his defence.

## Seventh Amendment

You’re guaranteed a jury in a civil court case, too. A civil court case is between 2 private individuals (while a criminal case is between a person and the government). 

Actual text: In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury shall be otherwise reexamined in any Court of the United States, than according to the rules of common law.

## Eighth Amendment
If you’re convicted of a crime, you can’t be punished in any really grim way. (This is the “no cruel and unusual punishment” one.) Also, bail should be set at a reasonable rate. 

**What’s bail?** Bail is money you give to the court to hold onto so that you can wait for your trial at home instead of in jail.

Actual text: Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted

## Ninth Amendment
You also have other rights, and nobody can violate them just because the Bill of Rights doesn’t officially list them

Actual text: The enumeration in the Constitution of certain rights shall not be construed to deny or disparage others retained by the people.

## Tenth Amendment
The federal (or national) government only has the powers the Constitution lists. For everything else, the states get to make their own laws. 

Actual text: The powers not delegated to the United States by the Constitution, nor prohibited by it to the states, are reserved to the states respectively, or to the people.
`;
export default function BillOfRights() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}