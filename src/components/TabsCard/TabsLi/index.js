import React from 'react';

// Modules

import types from 'prop-types';
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaChessPawn,
} from 'react-icons/fa';

//------------

export const FirstTabsLi = [
  {
    title: 'Новый взгляд на обучение',
    desc: 'занятия проходят на самых новых и удобных платформах',
    icon: () => <FaChessPawn />,
  },
  {
    title: 'Систематизация',
    desc: 'учимся мыслить организованно и приучаемся думать наперед',
    icon: () => <FaChessQueen />,
  },
  {
    title: 'Практика',
    desc:
      'на каждом занятии ученики помимо теории пробуют свои силы в реальной игре',
    icon: () => <FaChessRook />,
  },
  {
    title: 'Улучшение памяти',
    desc: 'игроку необходимо запомнить свои шаги наперед',
    icon: () => <FaChessKing />,
  },
  {
    title: 'Анализ',
    desc: 'учимся применять анализ для оценивания ситуаций на игровой доске',
    icon: () => <FaChessBishop />,
  },
  {
    title: 'Tворчество',
    desc: 'шахматы так же способны выводить игроков за очерченные рамки',
    icon: () => <FaChessKnight />,
  },
];

export const SecondTabsLi = [
  {
    title: 'Практика',
    desc:
      'на каждом занятии ученики помимо теории пробуют свои силы в реальной игре',
    icon: () => <FaChessQueen />,
  },
  {
    title: 'Tворчество',
    desc: 'шахматы так же способны выводить игроков за очерченные рамки',
    icon: () => <FaChessPawn />,
  },
  {
    title: 'Новый взгляд на обучение',
    desc: 'занятия проходят на самых новых и удобных платформах',
    icon: () => <FaChessRook />,
  },
  {
    title: 'Систематизация',
    desc: 'учимся мыслить организованно и приучаемся думать наперед',
    icon: () => <FaChessBishop />,
  },
  {
    title: 'Улучшение памяти',
    desc: 'игроку необходимо запомнить свои шаги наперед',
    icon: () => <FaChessRook />,
  },
  {
    title: 'Анализ',
    desc: 'учимся применять анализ для оценивания ситуаций на игровой доске',
    icon: () => <FaChessKing />,
  },
];
