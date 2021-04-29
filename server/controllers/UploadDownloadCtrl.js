import formidable from 'formidable';
import fs from 'fs';
import path from 'path'


//1.declare pathDir untuk menyimpan image di local storage
const pathDir =  path.join(__dirname, '../../uploads/')

const upload = async (req, res,next) => {

    // jika directory belum ada then create new one
    if (!fs.existsSync(pathDir)) {
        fs.mkdirSync(pathDir);
    }

    const form = formidable({ multiples: true, uploadDir: pathDir });
    form.parse(req);
    form
        .on('fileBegin', (keyName, file) => {
            //console.log(keyName)
           // console.log(file);
            file.path = pathDir + file.name;
        })
        .on('field', (keyName, value) => {
            console.log(file.path)
        })
        .on('file', (keyName, file) => {
            
            req.fileName = file.name;
        })
        .on('end', () => {
            console.log('-> upload to storage done');
            next();
            //res.send("File Uploaded Successfully");
        });
}

const uploadMultipart = async (req,res,next)=>{
    // jika directory belum ada then create new one
    if (!fs.existsSync(pathDir)) {
        fs.mkdirSync(pathDir);
    }

    const files = [];
    const fields = [];
    
    const dataFiles ={
        fields : fields,
        files : files
    }

    const form = formidable({ multiples: true, uploadDir: pathDir });
    form.parse(req);

    form
         .on('fileBegin', (keyName, file) => {
            file.path = pathDir + keyName + '_' + file.name;
        }) 
        .on('field', (keyName, value) => {
            //const fileMain = 
            fields.push({ keyName, value });
        })
        .on('file', (fileId, file) => {
            const fileName = file.name;
            const filePath = file.path;
            const fileSize = file.size;
            files.push({ fileId, fileName, filePath, fileSize});
        })
        .on('end', () => {
            console.log('-> upload to storage done');
            req.dataFiles = dataFiles;
            next();
        });
}

const download = async (req, res) => {
    const filename = `${pathDir}/${req.params.filename}`
    res.download(filename);
}

export default {
    upload,
    download,
    uploadMultipart
}