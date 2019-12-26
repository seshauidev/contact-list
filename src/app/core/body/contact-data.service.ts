import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../../../models/contact.interface';

export class ContactData implements InMemoryDbService {
  createDb(){
    const contacts: Contact[]=[
        {
        id: 0,
        firstName: "Browning",
        lastName: "Graham",
        company: "MELBACOR",
        email: "browninggraham@melbacor.com",
        phone: "+1 (906) 585-2525",
        address: "920 Hastings Street, Roosevelt, Puerto Rico, 5573"
        },
        {
        id: 1,
        firstName: "Mcmahon",
        lastName: "Fulton",
        company: "ILLUMITY",
        email: "mcmahonfulton@illumity.com",
        phone: "+1 (814) 489-3373",
        address: "676 Bainbridge Street, Abrams, Mississippi, 2652"
        },
        {
        id: 2,
        firstName: "Susan",
        lastName: "Dyer",
        company: "ZAGGLE",
        email: "susandyer@zaggle.com",
        phone: "+1 (940) 547-2965",
        address: "853 Decatur Street, Waumandee, Nevada, 7107"
        },
        {
        id: 3,
        firstName: "Becker",
        lastName: "Gibson",
        company: "SKINSERVE",
        email: "beckergibson@skinserve.com",
        phone: "+1 (908) 466-2681",
        address: "995 Banner Avenue, Wollochet, Federated States Of Micronesia, 2706"
        },
        {
        id: 4,
        firstName: "Sparks",
        lastName: "Bullock",
        company: "COMBOGENE",
        email: "sparksbullock@combogene.com",
        phone: "+1 (922) 456-2177",
        address: "267 Chestnut Street, Waterview, Maryland, 1246"
        }
        ];
    return {contacts};
  }
}
