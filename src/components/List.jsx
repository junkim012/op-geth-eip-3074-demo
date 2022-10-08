import React, { Component, useState } from 'react';
import {
    DraggableContainer,
    DraggableItem
} from '@wuweiweiwu/react-shopify-draggable';

import { render } from 'react-dom';
import Block from './Block';

export default function List({ blocks, removeBlock }) {

    const [toPrint, setToPrint] = useState("hello");

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list); 
        const [removed] = result.splice(startIndex, 1); 
        result.splice(endIndex, 0, removed); 
        return result; 
    }

    return (
        <DraggableContainer
            as="div"
            type="sortable"
            className="flex flex-col"
        >

            {
                blocks.length ? blocks.map((block, idx) => {
                    console.log('idx: ', idx);
                    console.log('should render block');
                    return (
                        <div>
                         
                            <DraggableItem className="flex flex-col space-y-1 py-2"> 
                                block: {idx}
                                <Block key={idx} defaultName={block.defaultName} defaultChain={block.defaultChain} index={idx} removeBlock={removeBlock}></Block>
                            </DraggableItem>
                        </div>
                    )



                }) : <div></div>
            }

        </DraggableContainer>
    )
}

{/* <DraggableItem
                        as="div"
                        className="Block"
                    >
                        <Block defaultName={block.defaultName} defaultChain={block.defaultChain} ></Block>

                    </DraggableItem> */}