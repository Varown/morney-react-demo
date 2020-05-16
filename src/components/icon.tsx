import React from 'react';
import cs from 'classnames';
require('../icons/tag.svg');
require('../icons/money.svg');
require('../icons/chart.svg');
require('../icons/right.svg');
require('../icons/left.svg');
// let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type Props={
  name?:string
} & React.SVGAttributes<SVGElement>

const Icon=(props:Props)=>{
const {name,children,className,...rest}=props
  return(
    <svg className={cs('icon', className)} {...rest}>
      {props.name &&<use xlinkHref={'#'+props.name} />}
    </svg>
  );
};

export default Icon;