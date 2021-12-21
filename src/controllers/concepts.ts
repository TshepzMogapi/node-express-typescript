import { RequestHandler } from 'express';
import { Concept } from '../models/concept';

const Concepts: Concept[] = [];


export const createConcept: RequestHandler = (req, res, next) => {
  const { concept } = req.body;
  const newConcept = new Concept(new Date().getTime() + '', concept);
  Concepts.push(newConcept);
  res.status(201).send({ message: 'Created' });
};

export const getConcepts: RequestHandler = (req,res, next) => {
  res.send({concepts: Concepts});
};
