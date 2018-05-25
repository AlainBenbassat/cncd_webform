jQuery(document).ready(
    function() {
      // check if we have a select which name ends with province-id, and add hook
      jQuery("select[id$='province-id']").change(
          function() {
            // get the name of the selected province
            var selectID = this.id;
            var selectedProvince = jQuery('#' + selectID + ' option:selected').text();

            // find the matching tag label
            var labelContent = "";
            switch (selectedProvince) {
              case "Antwerpen":
              case "Anvers":
              case "Antwerp":
                labelContent = "- - - Flandre ";
                break;
              case "Brabant Wallon":
              case "Waals Brabant":
                labelContent = "- - - Brabant Wallon ";
                break;
              case "Brussel":
              case "Bruxelles":
              case "Brussels":
                labelContent = "- - - Bruxelles ";
                break;
              case "Hainaut":
              case "Henegauwen":
                labelContent = "- - - Hainaut ";
                break;
              case "Liege":
              case "Liège":
              case "Luik":
                labelContent = "- - - Liège ";
                break;
              case "Limburg":
              case "Limbourg":
                labelContent = "- - - Flandre ";
                break;
              case "Luxembourg":
              case "Luxemburg":
                labelContent = "- - - Luxembourg ";
                break;
              case "Namur":
              case "Namen":
                labelContent = "- - - Namur ";
                break;
              case "Oost-Vlaanderen":
              case "Flandre orientale":
                labelContent = "- - - Flandre ";
                break;
              case "West-Vlaanderen":
              case "Flandre occidentale":
                labelContent = "- - - Flandre ";
                break;
              case "Vlaams-Brabant":
              case "Brabant flamand":
                labelContent = "- - - Flandre ";
                break;
            }

            // find the label contains the text
            var checkboxID = jQuery("label:contains('" + labelContent + "')").attr('for');
            if (checkboxID) {
              jQuery('#' + checkboxID).attr("checked", "checked");
            }
          }
      );
    }
);