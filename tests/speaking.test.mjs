import test from 'node:test';
import assert from 'node:assert/strict';
import {compareWords,soundLessons,dialogues} from '../speaking.js';
test('word comparison ignores case and punctuation, never produces pronunciation score',()=>{const r=compareWords('Thank you for your help.','THANK you for your help!');assert.equal(r.matched,5);assert.equal(r.extra,0);assert.equal('score'in r,false);});
test('omissions and extra words preserve alignment of later words',()=>{const r=compareWords('I can work in a team.','I work in a great team');assert.deepEqual(r.words.map(w=>w.match),[true,false,true,true,true,true]);assert.equal(r.extra,1);});
test('repeated words cannot reuse one recognized word',()=>assert.equal(compareWords('very very good','very good').matched,2));
test('empty input yields no matches',()=>assert.equal(compareWords('Please take a seat.','').matched,0));
test('all lessons and dialogues include Vietnamese guidance and usable content',()=>{assert.equal(soundLessons.length,6);assert.equal(dialogues.length,3);assert.ok(soundLessons.every(l=>l.tip&&l.vi&&l.sentence&&l.focus.length));assert.ok(dialogues.every(d=>d.turns.length===3&&d.turns.every(t=>t.q&&t.vi&&t.hint)));});
