#!/bin/bash
#react native start script

#get sdk stuff into the path
source $HOME/.bash_profile 
echo $PATH

#run react-native on android emulator
react-native run-android 
