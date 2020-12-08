#!/bin/bash
BASEDIR=$(dirname "$0")
  npx ts-node $BASEDIR/src/day_$1.ts
fi