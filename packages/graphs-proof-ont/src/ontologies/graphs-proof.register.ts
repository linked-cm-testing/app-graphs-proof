/**
 * Registers this ontology.
 *
 * Kept out of `graphs-proof.ts` because registration needs that module's whole export
 * namespace, and a module cannot import itself once a bundler is involved: Rollup treats
 * a static self-reference as a circular import and elides it, so the binding is undefined
 * at runtime and the app dies at boot with `_this is not defined`. `tsc` preserves it,
 * which is why the pattern worked for as long as packages were only built with `tsc`.
 *
 * From a sibling module the same import is ordinary and survives.
 */
import * as terms from './graphs-proof.js';
import {linkedOntology} from '../package.js';
import {loadData, ns} from './graphs-proof.js';

linkedOntology(terms, ns, 'graphs-proof', loadData, ['../data/graphs-proof.ttl']);
