import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category='-'|'+'

function Money() {
  const [selected,setSelected]=useState({
    tags:[] as string[],
    node:'',
    category:'-'as Category,
    amount:0
  })

  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected(
      {
        ...selected,
        ...obj
      }
    )
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags)=>onChange({tags: tags})}/>

      <NoteSection value={selected.node}
                   onChange={(node)=>onChange({node:node})}/>
      <CategorySection value={selected.category}
                       onChange={(category)=>onChange({category:category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount:number)=>onChange({amount:amount})}/>
    </MyLayout>
  );
}

export default Money;