import React from 'react'

interface BlogItemProps {
  src: string;
  title: string;
  content: string;
}
export const BlogItem: React.FC<BlogItemProps> = (props) => {
  const {src, title, content} = props;
  return (
    <li className="flex gap-12 mb-8">
      <img src={src} alt="preview1" className="w-52 h-72 object-fill rounded-3xl border-8 border-dashed" />
      <div className="flex-1 px-12 pt-8 mt-6">
        <h6 className="font-bold text-xl mb-2">{title}</h6>
        <p>{content}</p>
      </div>
    </li>
  )
}
