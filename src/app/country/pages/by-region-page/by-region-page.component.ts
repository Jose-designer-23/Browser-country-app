import { Component, inject, linkedSignal, signal, effect } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Region } from "../../interfaces/region.type";
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


function validateQueryParam(queryParam: string): Region {
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Europe';
}


@Component({
  selector: 'by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})

export class ByRegionPageComponent {

    CountryService = inject(CountryService);

    public regions: Region[] = [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania',
      'Antarctic',
    ];

    activatedRoute = inject(ActivatedRoute);
    router = inject(Router);

    // Lee el parámetro 'region' de la URL
    regionParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';

    // Inicializa selectedRegion con el valor del parámetro si existe
    selectedRegion = signal<Region|null>(validateQueryParam(this.regionParam));

    countryResource = rxResource({
      request: () => ({ region: this.selectedRegion() }),
      loader: ({ request }) => {
        if (!request.region) return of([]);
        this.router.navigate(['/country/by-region'], {
          queryParams: {
            region: request.region,
          },
        });
        return this.CountryService.searchByRegion(request.region);
      },
    });

  }
