
import  { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
export const multiselectdata = [
    { value: 'Angelina May', label: 'Angelina May' },
    { value: 'Kiara advain', label: 'Kiara advain' },
    { value: 'Hercules Jhon', label: 'Hercules Jhon' },
    { value: 'Mayor Kim', label: 'Mayor Kim' },
    { value: 'Alexa Biss', label: 'Alexa Biss' },
    { value: 'Karley Dia', label: 'Karley Dia' },
    { value: 'Darren Sami', label: 'Darren Sami' },
    { value: 'Elizabeth', label: 'Elizabeth' },
    { value: 'Bear Gills', label: 'Bear Gills' },
    { value: 'Alex Carey', label: 'Alex Carey' }
];

interface EditorProps {
  placeholder?: string;
}

interface EditorState {
  editorHtml: string;
  theme: string;
}

const defaultContent = `
<p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</p>
<p><br></p>
<ol>
    <li class="ql-size-normal">Conducting a comprehensive analysis of the existing website design.</li>
    <li class="">Collaborating with the UI/UX team to develop wireframes and mockups.</li>
    <li class="">Iteratively refining the design based on feedback../li>
    <li class="">Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
    <li class="">Testing the website across different devices and browsers.</li>
</ol>
`;

class Editordata extends Component<EditorProps, EditorState> {
  static modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  static formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  constructor(props: EditorProps) {
    super(props);
    this.state = { editorHtml: defaultContent, theme: 'snow' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html: string) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme: string) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={Editordata.modules}
          formats={Editordata.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
    );
  }
}

export default Editordata;
