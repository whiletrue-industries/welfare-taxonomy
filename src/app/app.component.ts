import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import mermaid from 'mermaid';
import * as L from 'leaflet';
import { delay, tap, timer } from 'rxjs';
import { diagram } from './diagram';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  chart = diagram;
  chartSvg: SafeHtml | null = null;
  @ViewChild('chart') chartEl: ElementRef;
  @ViewChild('map') mapEl: ElementRef;
  overlay: L.SVGOverlay;
  map: L.Map;
  svgElementBounds: L.LatLngBoundsExpression;

  constructor(private domSanitizer: DomSanitizer) {}

  async ngAfterViewInit() {
    mermaid.initialize({
      startOnLoad: false
    });
    const { svg } = await mermaid.render('chart', this.chart);
    this.chartSvg = this.domSanitizer.bypassSecurityTrustHtml(svg);

    this.map = L.map(this.mapEl.nativeElement, {
      crs: L.CRS.Simple,
      // maxZoom: configuration.max_zoom,
      // minZoom: configuration.min_zoom,
      // maxBounds: [[0, 0], [1, 1]],
      // center: [-configuration.dim/2, configuration.dim/2],
      // zoom: configuration.min_zoom + 2,
      zoomControl: true,
      attributionControl: false
    });
    // new L.Control.Zoom({ position: 'bottomleft' }).addTo(this.map);

    timer(1).pipe(
      tap(() => {
        const svgElement = this.chartEl.nativeElement.querySelector('svg');
        const bounds = svgElement.getBoundingClientRect();
        if (bounds.width > bounds.height) {
          this.svgElementBounds = [ [ 0, 0 ], [ bounds.height/bounds.width, 1 ] ];
        } else {
          this.svgElementBounds = [ [ 0, 0 ], [ 1, bounds.width/bounds.height] ];
        }
        console.log(this.svgElementBounds);
        this.overlay = L.svgOverlay(svgElement, this.svgElementBounds).addTo(this.map);
      }),
      delay(1),
      tap(() => {
        this.map.fitBounds(this.svgElementBounds);
        this.chartSvg = null;
      })
    ).subscribe();
  }
}
