import React from 'react'

export const AboutTitle: React.FC<{data: TitleProps[]}> = (props) => {
  return (
    <div className="grid grid-cols-12 w-5/6 mx-auto gap-8">
      {props.data.map((item, index) => (
        <Title title={item.title} content={item.content} key={index} />
      ))}
    </div>
  )
}

interface TitleProps {
  title: string, 
  content: string
}
const Title: React.FC<TitleProps> = (props) => {
  const {title, content} = props;
  return (
    <div className="col-span-4 text-center">
      <h3 className="text-3xl font-bold italic mb-4">{title}</h3>
      <p className="text-start">{content}</p>
    </div>
  );
}