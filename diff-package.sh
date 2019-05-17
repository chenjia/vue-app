#!/bin/bash
diff package.json package.json.old >/dev/null
if [[ $? != "0" ]]
then
  echo 99
else
  echo 00
fi