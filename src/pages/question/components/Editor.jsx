import React, { useEffect, useMemo, useRef } from 'react';
import * as S from './EditorStyled';

import ReactQuill, { Quill } from 'react-quill';
import '~/../node_modules/react-quill/dist/quill.snow.css';
import './editor.css';
import ImageResize from 'quill-image-resize';

import DeviceWidth from '~/model/constants/DeviceWidth';
import { QuestionService } from '~/network/service/QuestionService';
import HttpStatus from '~/model/constants/HttpStatus';

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);
Quill.register('modules/ImageResize', ImageResize);

export const Editor = ({ windowSize, content, setContent, setThumbnail }) => {
  const quillRef = useRef();

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    document.body.appendChild(input);
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append('file', file);
      const res = await QuestionService.uploadImage({
        formData,
      });

      if (res.status == HttpStatus.OK) {
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', res.data.url);
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: { image: imageHandler },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
    }),
    [],
  );

  const formats = [
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'align',
    'color',
    'background',
    'image',
    'code-block',
  ];

  const handleText = (value) => {
    setContent(value);
    value;
  };

  const handleChangeThumbnail = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setThumbnail(event.target.files[0]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="text-editor">
        <CustomToolbar handleChangeFile={handleChangeThumbnail} />
        <S.ReactQuillTextArea>
          <ReactQuill
            ref={(element) => {
              if (element !== null) {
                quillRef.current = element;
              }
            }}
            placeholder="내용을 입력해주세요."
            style={{
              height: `${windowSize.width < DeviceWidth.TABLET ? '320px' : '640px'}`,
              backgroundColor: '#f6f6f8',
              fontSize: '16px',
            }}
            modules={modules}
            formats={formats}
            value={content}
            onChange={handleText}
          />
        </S.ReactQuillTextArea>
      </div>
    </div>
  );
};

const CustomToolbar = ({ handleChangeFile }) => (
  <div id="toolbar">
    <select className="ql-size" defaultValue={''} style={{ width: '100px', marginRight: '24px' }}>
      <option value="extra-small">매우 작게</option>
      <option value="small">작게</option>
      <option value="medium">보통</option>
      <option value="large">크게</option>
    </select>

    <button className="ql-bold" style={{ marginRight: '2px' }} />
    <button className="ql-italic" style={{ marginRight: '2px' }} />
    {/* <button className="ql-underline" style={{ marginRight: '4px' }} />
    <button className="ql-strike" style={{ marginRight: '4px' }} /> */}
    <button className="ql-blockquote" style={{ marginRight: '18px' }} />

    <select className="ql-color" defaultValue={''} style={{ marginRight: '4px' }}>
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option value=""></option>
    </select>
    <select className="ql-background" style={{ marginRight: '0px' }} />
    <button className="ql-clean" style={{ marginRight: '18px' }} />

    <button className="ql-align" value=""></button>
    <button className="ql-align" value="center"></button>
    <button className="ql-align" value="right" style={{ marginRight: '2px' }}></button>
    <button className="ql-align" value="justify" style={{ marginRight: '16px' }}></button>

    <button className="ql-code-block" style={{ marginRight: '4px' }} />
    <button className="ql-link" style={{ marginRight: '4px' }} />
    <button className="ql-image" style={{ marginRight: '8px' }} />
    <label htmlFor={'thumbnail'} className="custom_button">
      썸네일 추가
    </label>
    <input
      accept="image/*"
      type="file"
      id={'thumbnail'}
      name={'thumbnail'}
      onChange={handleChangeFile}
      style={{ display: 'none' }}
    />
  </div>
);
