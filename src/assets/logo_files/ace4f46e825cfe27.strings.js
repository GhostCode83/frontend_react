(function() {
 const messages = JSON.parse("{\"MNqOhg\":\"We could not upload some of your files because they aren’t a format Canva understands. Please choose only <strong>.jpg</strong>, <strong>.png</strong>, <strong>.svg</strong>, <strong>.heic</strong>, <strong>.webp</strong> or <strong>.gif</strong> files to upload. Try uploading these files again once you save them in a different format\",\"9J3sMg\":\"Each video must be less than <strong>{0}MB</strong> in size. Try uploading these files again once you’ve reduced their size:\",\"S5J9Xw\":\"Maximize your storage space by compressing {0, plural, one {this video} other {these videos}}. Upgrade to {1} to upload videos without a drop in quality.\",\"qMuBRg\":\"Upload Error\",\"eEt/mA\":\"We could not upload some of your files because they aren’t a format Canva understands. Please choose only <strong>.jpg</strong>, <strong>.png</strong>, <strong>.svg</strong>, <strong>.heic</strong>, <strong>.webp</strong>, <strong>.gif</strong>, <strong>.avi</strong>, <strong>.mov</strong>, <strong>.mp4</strong>, <strong>.webm</strong>, <strong>.mkv</strong>, <strong>.m4v</strong> or <strong>.mpeg</strong> files to upload. Try uploading these files again once you save them in a different format\",\"b4vp5w\":\"Each audio track must be less than <strong>{0}MB</strong> in size. Try uploading these files again once you’ve reduced their size:\",\"R45/fA\":\"Read our <a href=\\\"{0}\\\">Upload formats and requirements</a> article for file size limits.\",\"nMPONw\":\"We could not upload some of your files because they aren’t a format Canva understands. Please choose only <strong>.jpg</strong>, <strong>.png</strong>, <strong>.svg</strong>, <strong>.heic</strong>, <strong>.webp</strong>, <strong>.gif</strong>, <strong>.avi</strong>, <strong>.mov</strong>, <strong>.mp4</strong>, <strong>.mpeg</strong>, <strong>.webm</strong>, <strong>.mkv</strong>, <strong>.m4v</strong>, <strong>.mp3</strong>, <strong>.m4a</strong>, <strong>.wav</strong> or <strong>.ogg</strong> files to upload. Try uploading these files again once you save them in a different format\",\"VnFtFw\":\"Some of the files you are trying to upload are not compatible with Canva, or they have been corrupted. Please make sure all files you upload have the correct file extension and are not broken.\",\"BrvBTg\":\"You might be logged out, offline or Canva’s servers are unreachable. Try uploading again once you’ve checked your connection.\",\"o+F0Lw\":\"Compress\",\"klIprA\":\"Upload full quality\",\"SONRjg\":\"Cancel upload\",\"2/qWPg\":\"You have reached your storage capacity. Try deleting some uploads to free up storage space.\",\"Qx2/Mw\":\"Compress {0, plural, one {video} other {videos}}?\",\"7wMVmQ\":\"Each <strong>.{1}</strong> file must be less than <strong>{0}MB</strong> in size. Try uploading these files again once you’ve reduced their size:\",\"pGjZ8A\":\"Each image must be less than <strong>{0}MB</strong> in size. Try uploading these files again once you’ve reduced their size:\",\"Blg7sQ\":\"You might be logged out, offline or Canva’s servers are unreachable. Try uploading again once you’ve checked your connection.\",\"+Xm2hw\":\"We couldn’t upload some of your files because there is not enough space on your device. Please try uploading these files again when you are back online:\",\"SrXzQw\":\"OK, got it\",\"g59FXg\":\"Compress {0, plural, one {video} other {videos}}\",\"z5Xjxw\":\"Each <strong>.pdf</strong> file must be less than <strong>{0}MB</strong> in size. Try uploading these files again once you’ve reduced their size:\",\"hlpujg\":\"You might be logged out, offline or Canva’s servers are unreachable. Try uploading again once you’ve checked your connection.\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en"] = strings["en"] ? Object.assign(strings["en"], messages) : messages;
})();