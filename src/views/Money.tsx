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
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,
                     tags:tags
                   })}/>

      <NoteSection value={selected.node}
                   onChange={(node)=>setSelected({
                     ...selected,
                     node:node
                   })}/>
      <CategorySection value={selected.category}
                       onChange={(category)=>setSelected({
                         ...selected,
                         category:category
                       })}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount:number)=>setSelected({
                          ...selected,
                          amount:amount
                        })}/>
    </MyLayout>
  );
}

export default Money;