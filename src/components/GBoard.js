import React, { useState } from 'react'
import CardCreate from './CardCreate'
import SBoard from './SBoard';

function GBoard({teams, setTeams}) {

  const catQAndA = [
    // ============= 100 point Quesions ===========
     [`What was the name of the resturant that was across the street from Aunt Esther's House?`,
     'Frosty Freeze'],
     [`What was the name of the dog that bite Jason's eyebrow?`, 'Sugar'],
     [`Who said this famous quote, "I did caca!"`, 'Jason'],
     [`Jason has a pet peeve for this item being left out, what is it?`, 'Milk'],
     [`This spouse/gf/bf looked up to this family member and always wanted to be around them in the beginning?`, 'Cecil'],
     [`This pokemon is yellow and black and shots electritcy, what is his name?`, 'Pikachu', 'kids'],
     // ============= 200 point Quesions ===========
     ['Who had a spider crawl on them in the middle of the night while sleeping?','Priscella'],
     [`What was the name of Bam Bam's parents?`, 'Sasha and Lucky'],
     [`What was moms(Vicky's) famous quote in the grocery store?`, 'Let me see if I have a coupon'],
     [`Who is said to have fell in slow motion?`, 'Mom(Vicky)'],
     [`Two Spouses have the biggest collection of these 2 clothing items. Who are they and what are the items`, 'Daisy - shoes & Cedric - Jerseys'],[`This pokemon is orange, flies, and shots fire, what is his name?`, 'Charizard', 'kids'],
    // ============= 300 point Quesions ===========
    ['What kind of fruit tree did Aunt Esther have at her house?',
    'Pomergrante Tree'],
    ['Which dog once walked around with poop on their head?', 'Spike'],
    [`Who's favorite quote was "You little shit"`, 'Grandma(Connie Sera)'],
    [`Who has totaled the most cars?`, 'Rudy - 2'],
    [`Which Spouses were not born in the US?`, 'Kylie and Sandra'],
    [`How many gym badges do you need to challege the Elite Four?`, '8', 'kids'],
    // ============= 400 point Quesions ===========
    [`What was the name of the church Jason, Rudy, Louie, and Priscella went to in Taft?`, `Saint Mary's Church`],
    [`As a child Jason was horrible at naming pets, what was the name that he wanted to give his puppy?`, 'White Diamond'],
    [`Who once said this, "These don't taste like my mom's"?`, 'Louie'],
    [`Kylie and Sandra are both known to have studied to become a nurse, but who is the third person?`, 'Mom(Vicky)'],
    [`How many couples did not meet there spouse/gf/bf at work?`, '2 - (Doggy & Charlie, Priscella & Cedric)'],
    [`What type is weak against fire? (Hint: There are 3 types)`, 'Grass, Steel, and Ice', 'kids'],
    // ============= 500 point Quesions ===========
    ['What was the name of the Baseball Team we boys played on as kids?',
    'Moose Lodge'],
    [`What was the name of Aunt Esthers demon child dog?`, 'Mugsy'],
    [`Who once sang to the heaven's this phrase, "Maria, Marrriiiaaaa!!!!"?`, 'Ryan'],
    [`What was the name of the high school's we kids all graduated from?`, 'Valley, Clark, Liberty, and Taft Union High School'],
    ['How many spouses/gf/bf have traveled outside of the US and who are they?', '4 - (Sandra, Daisy, Cedric, and Kylie)'],
    [`How many pokemon can you choose from when you first start the pokemon game?`, '3', 'kids']
  ]

  const categories = [
    'Taft History',
    'Pets',
    'Quotes',
    `Rando's`,
    'The Spouses',
    `Pokemon(kids only)`
  ]

  let gameBoardTiles = [];
  let gameBoardCatTitles = [];

  let value = 100;
  let kValue = 500;
  let keyIndex = 0;
  let valueCount = 0;
  for(let i=0;i<catQAndA.length ;i++) {
    let gameBoardTile = [];
    gameBoardTiles.push(gameBoardTile)
    if(catQAndA[i].length === 2) {
      gameBoardTile.push(
      <CardCreate key={keyIndex} 
      catQAndA={catQAndA[i]}
      value={value} teams={teams} setTeams={setTeams}></CardCreate>
    )
    valueCount++;
    } else {
      gameBoardTile.push(
        <CardCreate key={keyIndex} 
        catQAndA={catQAndA[i]}
        value={kValue} teams={teams} setTeams={setTeams}></CardCreate>
      )
    }
    
    keyIndex++;
    if(valueCount === 5) {
    value+=100;
    valueCount = 0;
    } 
  }

  for(let k=0;k<categories.length;k++) {
    gameBoardCatTitles.push(<h2 key={k} className='inputTxt sizeBox'>{categories[k]}</h2>)
  }

  return (
    <div>
      <SBoard teams={teams}></SBoard>
      <div id='margin-top' className='game-board container d-flex flex-row flex-wrap justify-content-between align-items-center gap-2'>
        <div className='gameHeader d-flex flex-row flex-wrap justify-content-between align-items-center gap-2'>
        {gameBoardCatTitles}
        </div>
        {gameBoardTiles}
      </div>
      
    </div>
  )
}

export default GBoard