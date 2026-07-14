import { Injectable } from '@angular/core';
import { KnowledgeEntry } from '../../../shared/models/knowledge-entry.model';
import { ITAMAR_KNOWLEDGE_DATA } from '../data/itamar-knowledge.data';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeLibraryService {
  getEntries(): KnowledgeEntry[] {
    return ITAMAR_KNOWLEDGE_DATA;
  }
}
