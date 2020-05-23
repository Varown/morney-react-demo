import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    // 获取你要改的 tag 的下标
    const index = findTagIndex(id);
    // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把 tagsClone 的第 index 删掉，换成 {id:id, name: obj.name}
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);

  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagNames = window.prompt('请输入要添加的标签名称');
    if(tagNames=== null){return}
    let tagName = tagNames.replace(/\s*/g,"");
    if (tagName !== null && tagName !== '') {
      if(tags.filter(tag=>tag.name===tagName).length===0){
        setTags([...tags, {id: createId(), name: tagName}]);
      }else {
        window.alert('标签名重复')
      }
    }else {
      window.alert('标签名不能为空')
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };
  return {tags, getName, addTag, setTags, findTag, updateTag, findTagIndex, deleteTag};

};
export {useTags};