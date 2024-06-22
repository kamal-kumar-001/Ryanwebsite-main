import { EditorContent, useEditor } from "@tiptap/react";
import "highlight.js/styles/atom-one-dark.css";
import MenuBar from "./MenuBar";
import { extensions } from "../../constants/tiptapExtensions";
import PropTypes from 'prop-types';

const Editor = ({ onDataChange, content, editable }) => {
  const editor = useEditor({
    editable,
    extensions: extensions,
    editorProps: {
      attributes: {
        class: "!dark:prose-invert prose-sm sm:prose-base  my-7 focus:outline-none prose-pre:bg-[#282c34] prose-pre:text-[#abb2bf] ",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      onDataChange(json);
    },
    content: content,
  });

  return (
    <div className="Editor w-full">
      {editable && <MenuBar editor={editor}/>}
      <EditorContent editor={editor}/>
    </div>
  );
};

Editor.propTypes = {
  onDataChange: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
  editable: PropTypes.bool.isRequired,
};

export default Editor;
