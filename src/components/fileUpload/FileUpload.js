import { useContext } from "react";
import { storageBucket } from "../..";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { UserContext } from "../../context/UserContext";

const FileUpload = () => {
  const user = useContext(UserContext);

  const uploadFile = (e) => {
    let file = e.target.files[0];

    let fileRef = ref(storageBucket, `foto/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          user.logUser({ ...user.user, imgSrc: downloadURL });
        });
      }
    );
  };

  return (
    <div>
   
      <label htmlFor="filePicker" style={{ background:"grey", padding:"5px 10px" }}>
Cambiar foto de perfil
</label>
<input id="filePicker" style={{visibility:"hidden"}} type={"file"} onChange={uploadFile}  
      accept="image/png, image/jpeg"></input>
    </div>
  );
};

export default FileUpload;
