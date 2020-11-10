import React from 'react'
import Upload from './components/Upload/Upload'
import Alert from './components/Alert/Alert'


const beforeUpload = (file: File) => {
  const newFile = new File([file], 'file', { type: file.type })
  return Promise.resolve(newFile)
}

function App() {
  return (
    <div className="App">
      <Alert title='hello'>

      </Alert>
      <Upload action='http://39.105.33.148:8082/create' drag multiple beforeUpload={beforeUpload} headers={{ "Admin-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIG1hbGwgdG9rZW4iLCJhdWQiOiJNSU5JQVBQIiwiaXNzIjoiTUFMTCIsImV4cCI6MTYwNTI1OTEwOSwidXNlcklkIjoxOSwiaWF0IjoxNjA0NjU0MzA5fQ.iKokYcL_76ArmwgBl04ouT3lKwHUSuK1pzidL35_6b8' }}></Upload>
    </div>
  );
}

export default App;
