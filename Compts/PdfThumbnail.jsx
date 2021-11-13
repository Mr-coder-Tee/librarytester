import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PdfThumbnail from "react-native-pdf-thumbnail";
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";

const PdfThumbnails = () => {
  useEffect(() => {
    const getThumb = async () => {
      const url = "https://www.cs.bham.ac.uk/~jxb/DSA/dsa.pdf";
      const f2 = url.split("/");
      const fileName = f2[f2.length - 1];
      const localFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      const options = {
        fromUrl: url,
        toFile: localFile
      };
      RNFS.downloadFile(options)
        .promise.then(() => FileViewer.open(localFile))
        .then(() => {
          // success
          // Here you can perform any of your completion tasks
        })
        .catch((error) => {
          // error
        });
    };
  }, []);

  return (
    <View>
      <Text>PdfThumbnail</Text>
    </View>
  );
};

export default PdfThumbnails;

const styles = StyleSheet.create({});
